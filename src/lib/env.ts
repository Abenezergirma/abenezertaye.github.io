export const env = {
  // Email Configuration
  resendApiKey: process.env.RESEND_API_KEY,
  contactEmail: process.env.CONTACT_EMAIL || 'abenezertaye@gvu.edu',
  adminEmail: process.env.ADMIN_EMAIL,
  
  // Security Configuration
  nextauthSecret: process.env.NEXTAUTH_SECRET,
  telemetryDisabled: process.env.NEXT_TELEMETRY_DISABLED === '1',
} as const;

// Server-side environment validation
if (typeof window === 'undefined') {
  // Required for production
  if (!env.nextauthSecret) {
    console.error('❌ NEXTAUTH_SECRET is not set. This is required for production.');
  }
  
  // Warn if Resend is not configured (contact form won't work)
  if (!env.resendApiKey) {
    console.warn('⚠️ RESEND_API_KEY is not set. Contact form will not work.');
  }
  
  // Log security status
  if (env.telemetryDisabled) {
    console.log('✅ Telemetry is disabled - Privacy protected');
  }
}