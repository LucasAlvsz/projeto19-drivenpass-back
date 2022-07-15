const unauthorizedError = (message: string) => {
	return {
		status: 401,
		message,
	}
}

const conflictError = (message: string) => {
	return {
		status: 409,
		message,
	}
}

const notFoundError = (message: string) => {
	return {
		status: 404,
		message,
	}
}

export { unauthorizedError, conflictError, notFoundError }
