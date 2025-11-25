export const env = {
  resendApiKey: process.env.RESEND_API_KEY,
  contactEmail: process.env.CONTACT_EMAIL || 'abenezertaye@gvu.edu',
  adminEmail: process.env.ADMIN_EMAIL,
  nextauthSecret: process.env.NEXTAUTH_SECRET,
} as const;

// Validation for required environment variables
if (typeof window === 'undefined' && !env.resendApiKey) {
  console.warn('RESEND_API_KEY is not set. Contact form will not work.');
}

if (typeof window === 'undefined' && !env.nextauthSecret) {
  console.warn('NEXTAUTH_SECRET is not set. Required for production.');
}