// Health Monitoring System
// Periodically checks website and API endpoints

const HEALTH_CONFIG = {
  autoRefreshInterval: 30000, // 30 seconds
  timeout: 10000, // 10 second timeout for requests
  services: {
    // Frontend services (actual pages we can check)
    'website': {
      url: window.location.origin + '/index.html',
      type: 'frontend',
      method: 'GET'
    },
    'features': {
      url: window.location.origin + '/features.html',
      type: 'frontend',
      method: 'GET'
    },
    'pricing': {
      url: window.location.origin + '/pricing.html',
      type: 'frontend',
      method: 'GET'
    },

    // Backend API services (simulated with random status)
    'api-auth': {
      url: 'https://api.startup-os.com/auth/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },
    'api-decisions': {
      url: 'https://api.startup-os.com/decisions/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },
    'api-tasks': {
      url: 'https://api.startup-os.com/tasks/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },
    'api-announcements': {
      url: 'https://api.startup-os.com/announcements/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },
    'api-people': {
      url: 'https://api.startup-os.com/people/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },
    'api-widgets': {
      url: 'https://api.startup-os.com/widgets/health',
      type: 'api',
      method: 'GET',
      simulated: true
    },

    // Infrastructure services (simulated)
    'database': {
      url: 'postgres://db.startup-os.com:5432',
      type: 'infrastructure',
      simulated: true
    },
    'cache': {
      url: 'redis://cache.startup-os.com:6379',
      type: 'infrastructure',
      simulated: true
    },
    'storage': {
      url: 's3://startup-os-assets',
      type: 'infrastructure',
      simulated: true
    }
  }
};

class HealthMonitor {
  constructor() {
    this.autoRefreshTimer = null;
    this.isChecking = false;
    this.results = {};
    this.init();
  }

  init() {
    // Run initial health check
    this.checkAllServices();

    // Setup event listeners
    document.getElementById('refresh-btn').addEventListener('click', () => {
      this.checkAllServices();
    });

    const autoRefreshToggle = document.getElementById('auto-refresh-toggle');
    autoRefreshToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        this.startAutoRefresh();
      } else {
        this.stopAutoRefresh();
      }
    });

    // Start auto-refresh if enabled
    if (autoRefreshToggle.checked) {
      this.startAutoRefresh();
    }
  }

  startAutoRefresh() {
    this.stopAutoRefresh(); // Clear any existing timer
    this.autoRefreshTimer = setInterval(() => {
      this.checkAllServices();
    }, HEALTH_CONFIG.autoRefreshInterval);
  }

  stopAutoRefresh() {
    if (this.autoRefreshTimer) {
      clearInterval(this.autoRefreshTimer);
      this.autoRefreshTimer = null;
    }
  }

  async checkAllServices() {
    if (this.isChecking) return;

    this.isChecking = true;
    this.updateLastChecked();

    const checks = Object.keys(HEALTH_CONFIG.services).map(serviceId =>
      this.checkService(serviceId)
    );

    await Promise.all(checks);

    this.updateOverallStatus();
    this.isChecking = false;
  }

  async checkService(serviceId) {
    const config = HEALTH_CONFIG.services[serviceId];
    const element = document.querySelector(`[data-service="${serviceId}"]`);

    if (!element) return;

    // Set checking state
    this.updateServiceUI(element, 'checking', 0);

    try {
      let result;

      if (config.simulated) {
        // Simulate API/Infrastructure check with random results
        result = await this.simulateServiceCheck(config);
      } else {
        // Actual frontend page check
        result = await this.checkFrontendService(config);
      }

      this.results[serviceId] = result;
      this.updateServiceUI(element, result.status, result.responseTime, result);

    } catch (error) {
      this.results[serviceId] = {
        status: 'error',
        responseTime: 0,
        error: error.message
      };
      this.updateServiceUI(element, 'error', 0);
    }
  }

  async checkFrontendService(config) {
    const startTime = performance.now();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), HEALTH_CONFIG.timeout);

      const response = await fetch(config.url, {
        method: config.method,
        signal: controller.signal,
        cache: 'no-cache'
      });

      clearTimeout(timeoutId);
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);

      if (response.ok) {
        return {
          status: 'healthy',
          responseTime: responseTime,
          statusCode: response.status
        };
      } else {
        return {
          status: 'degraded',
          responseTime: responseTime,
          statusCode: response.status
        };
      }
    } catch (error) {
      const endTime = performance.now();
      return {
        status: 'error',
        responseTime: Math.round(endTime - startTime),
        error: error.message
      };
    }
  }

  async simulateServiceCheck(config) {
    // Simulate network delay
    const delay = Math.random() * 500 + 50; // 50-550ms
    await new Promise(resolve => setTimeout(resolve, delay));

    // 90% healthy, 8% degraded, 2% error
    const rand = Math.random();
    let status;
    if (rand < 0.90) {
      status = 'healthy';
    } else if (rand < 0.98) {
      status = 'degraded';
    } else {
      status = 'error';
    }

    const responseTime = Math.round(delay);

    // Simulate additional data for infrastructure
    let extraData = {};
    if (config.type === 'infrastructure') {
      if (serviceId === 'database') {
        extraData.connections = Math.floor(Math.random() * 30) + 10;
      } else if (serviceId === 'cache') {
        extraData.memory = (Math.random() * 200 + 50).toFixed(1);
      } else if (serviceId === 'storage') {
        extraData.storage = (Math.random() * 50 + 10).toFixed(1);
      }
    }

    return {
      status: status,
      responseTime: responseTime,
      ...extraData
    };
  }

  updateServiceUI(element, status, responseTime, result = {}) {
    const statusDot = element.querySelector('.status-dot');
    const responseElement = element.querySelector('.health-item-response');

    // Update status dot
    statusDot.className = 'status-dot';
    statusDot.classList.add(`status-${status}`);

    // Update response time
    if (responseTime > 0) {
      responseElement.textContent = `${responseTime} ms`;

      // Color code response time
      if (responseTime < 200) {
        responseElement.style.color = '#2ecc71';
      } else if (responseTime < 500) {
        responseElement.style.color = '#f39c12';
      } else {
        responseElement.style.color = '#e74c3c';
      }
    } else {
      responseElement.textContent = '— ms';
      responseElement.style.color = '';
    }

    // Update additional details for infrastructure
    if (result.connections !== undefined) {
      const detailValue = element.querySelector('.detail-value');
      detailValue.textContent = `${result.connections} / 100`;
    }
    if (result.memory !== undefined) {
      const detailValue = element.querySelector('.detail-value');
      detailValue.textContent = `${result.memory} MB`;
    }
    if (result.storage !== undefined) {
      const detailValue = element.querySelector('.detail-value');
      detailValue.textContent = `${result.storage} GB`;
    }
  }

  updateOverallStatus() {
    const statuses = Object.values(this.results);

    if (statuses.length === 0) return;

    const errorCount = statuses.filter(r => r.status === 'error').length;
    const degradedCount = statuses.filter(r => r.status === 'degraded').length;
    const healthyCount = statuses.filter(r => r.status === 'healthy').length;

    const overallElement = document.getElementById('overall-status');
    const statusIcon = overallElement.querySelector('.status-icon');
    const statusMessage = overallElement.querySelector('.status-message');

    let status, message;

    if (errorCount > 0) {
      status = 'error';
      message = `${errorCount} service${errorCount > 1 ? 's' : ''} down, ${degradedCount} degraded`;
    } else if (degradedCount > 0) {
      status = 'degraded';
      message = `${degradedCount} service${degradedCount > 1 ? 's' : ''} degraded, ${healthyCount} healthy`;
    } else {
      status = 'healthy';
      message = `All systems operational (${healthyCount} services)`;
    }

    statusIcon.className = 'status-icon';
    statusIcon.classList.add(`status-${status}`);
    statusMessage.textContent = message;
  }

  updateLastChecked() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    document.getElementById('last-updated').textContent = `Last checked: ${timeString}`;
  }
}

// Initialize health monitor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HealthMonitor();
});
