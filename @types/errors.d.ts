export as namespace errors;

export interface BaseError {
    name: string
    message: string
}

export default class RegistrationError implements BaseError {
    name: 'REGISTRATION_ERROR'
}

export default class UnregistrationError implements BaseError {
    name: 'UNREGISTRATION_ERROR'
}

export default class EntityGenericError implements BaseError {
    name: 'ENTITY_GENERIC_ERROR'
    details: object
    code: number
}

export default class EntityNotFound implements BaseError {
    name: 'ENTITY_NOT_FOUND'
    code: 404
}


