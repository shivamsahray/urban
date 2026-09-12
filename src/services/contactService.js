// contactService: abstraction for connecting a backend later.
export async function sendContact(formData) {
  // Demo mode: mimic network delay and success response.
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, message: 'Demo success' }), 1000)
  })
}

// To connect a real backend, replace implementation with a POST to your
// serverless endpoint, e.g. POST /api/contact with JSON body.
