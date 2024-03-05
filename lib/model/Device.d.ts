export interface Device {
    id: string,
    type: string,
    name?: string,
    lazy?: Array,
    active?: DeviceAttribute[],
    commands: DeviceCommand[],
    apikey?: string,
    endpoint?: string,
    resource?: string,
    protocol?: string,
    transport?: string,
    staticAttributes?: Array,
    subscriptions?: Array,
    service: string,
    subservice: string,
    polling?: Boolean,
    timezone?: string,
    timestamp?: Boolean,
    registrationId?: string,
    internalId?: string,
    creationDate?: Date,
    internalAttributes?: Object,
    autoprovision?: boolean,
    ngsiVersion?: string,
    payloadType?: string
}

interface DeviceCommand {
    name: string,
    type: 'command'
}

interface DeviceAttribute {
    object_id: string,
    name: string,
    type: "Integer" | "String" | "Boolean",
    value: string | number | boolean,
}

