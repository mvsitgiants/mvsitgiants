import { logEvent, setUserId, setUserProperties } from 'firebase/analytics';
import { analytics } from '../firebase';

export class AnalyticsService {
  // Page view tracking
  static trackPageView(pageName: string, pageTitle?: string) {
    if (typeof window !== 'undefined' && analytics) {
      logEvent(analytics, 'page_view', {
        page_title: pageTitle || pageName,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }

  // Contact form tracking
  static trackContactFormSubmission(source: string = 'contact_page') {
    if (analytics) {
      logEvent(analytics, 'contact_form_submitted', {
        form_type: 'contact',
        source: source,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Newsletter subscription tracking
  static trackNewsletterSubscription(source: string = 'footer') {
    if (analytics) {
      logEvent(analytics, 'newsletter_subscribed', {
        source: source,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Service interest tracking
  static trackServiceInterest(serviceName: string, action: string = 'view') {
    if (analytics) {
      logEvent(analytics, 'service_interaction', {
        service_name: serviceName,
        action: action,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Product interest tracking
  static trackProductInterest(productName: string, action: string = 'view') {
    if (analytics) {
      logEvent(analytics, 'product_interaction', {
        product_name: productName,
        action: action,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Career page tracking
  static trackCareerPageView() {
    if (analytics) {
      logEvent(analytics, 'career_page_viewed', {
        timestamp: new Date().toISOString()
      });
    }
  }

  // About page tracking
  static trackAboutPageView() {
    if (analytics) {
      logEvent(analytics, 'about_page_viewed', {
        timestamp: new Date().toISOString()
      });
    }
  }

  // Phone number click tracking
  static trackPhoneClick(phoneNumber: string, source: string = 'contact_page') {
    if (analytics) {
      logEvent(analytics, 'phone_clicked', {
        phone_number: phoneNumber,
        source: source,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Email click tracking
  static trackEmailClick(email: string, source: string = 'contact_page') {
    if (analytics) {
      logEvent(analytics, 'email_clicked', {
        email: email,
        source: source,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Social media link tracking
  static trackSocialMediaClick(platform: string, source: string = 'footer') {
    if (analytics) {
      logEvent(analytics, 'social_media_clicked', {
        platform: platform,
        source: source,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Custom event tracking
  static trackCustomEvent(eventName: string, parameters?: Record<string, any>) {
    if (analytics) {
      logEvent(analytics, eventName, {
        ...parameters,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Set user properties (if you have user identification)
  static setUserProperties(properties: Record<string, any>) {
    if (analytics) {
      setUserProperties(analytics, properties);
    }
  }

  // Set user ID (if you have user identification)
  static setUserId(userId: string) {
    if (analytics) {
      setUserId(analytics, userId);
    }
  }
}
