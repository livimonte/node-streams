export function extractQueryParams(query) {
  if (typeof query !== 'string' || query[0] !== '?') {
    throw new Error('Invalid query string')
  }

  return query
    .slice(1)
    .split('&')
    .filter((param) => param.includes('='))
    .reduce((queryParams, param) => {
      const [key, value] = param.split('=')
      queryParams[key] = decodeURIComponent(value || '')

      return queryParams
    }, {})
}
