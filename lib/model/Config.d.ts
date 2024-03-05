export interface IoTConfig {
    logLevel?: 'DEBUG' | 'INFO' | 'ERROR' | 'FATAL'
    contextBroker?: {
        host: string,
        port: string,
        ngsiVersion?: string
    }
    server?: {
        baseRoot: string
        port: number
    }
    stats?: {
        interval: number
    }
    authentication?: {
        enabled: false
    } | {
        enabled: true
        type: 'keystone'
        url: string
        user: string
        password: string
    } | {
        enabled: true
        type: 'oauth2'
        url: string
        header: string
        clientId: string
        clientSecret: string
        tokenPath: string
        permanentToken?: boolean
    }
    deviceRegistry?: {
        type: 'memory' | 'mongodb'
    }
    mongodb?: {
        host: string
        port: string
        db: string
        retries: number
        retryTime: number
        user?: string
        password?: string
        replicaSet?: string
        authSource?: string
        ssl?: boolean
        extraArgs?: {
            retryWrites: boolean
            readPreference: string
            w: string
        }
    }
    iotManager?: {
        host: string
        port: number
        path: string
        protocl: string
        description: string
        agentPath: string
    }
    types?: object
    service?: string
    subservice?: string
    providerUrl?: string
    iotaVersion?: string
    dieOnUnexpectedError?: boolean
    timestamp?: boolean
    defaultResource?: string
    defaultKey?: string
    componentName?: string
    pollingExpiration?: number
    pollingDaemonFrequency?: number
    multiCore?: boolean
    fallbackTenant?: string
    fallbackPath?: string
    explicitAttrs?: boolean
    defaultEntityNameConjunction?: string
    relaxTemplateValidation?: boolean
}
