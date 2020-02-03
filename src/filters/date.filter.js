export default function dateFilter(value, format = 'date') {
  const options = {}

  if (format.includes('date')) {
    options.day = '2-digit'
    options.weekday = 'long'
    options.month = 'long'
    options.year = 'numeric'
  }

  return new Intl.DateTimeFormat('en-US', options).format(new Date(value))
}
