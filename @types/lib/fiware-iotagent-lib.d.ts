import { BaseError } from "../errors";
import { IoTConfig } from "./model/Config"
import { Device } from "./model/Device"
import { Group } from "./model/Group"

declare module 'iotagent-node-lib' {
    /**
     * Activates the IoT Agent to start listening for NGSI Calls (acting as a Context Provider). 
     * It also creates the device registry for the IoT Agent (based on the deviceRegistry.type configuration option).
     * 
     * @param newConfig Configuration of the Context Server
     */
    export function activate(newConfig: IoTConfig, callback: (error: BaseError | null) => void): void;

    /**
     * Stops the HTTP Server
     */
    export function deactivate(callback: (error: BaseError | null) => void): void;

    //********************************************************************************************************** */
    //* DEVICE CRUD
    //********************************************************************************************************** */

    export function register(device: Device, callback: (error: BaseError | null) => void): void;

    export function getDevice(
        deviceId: string,
        apikey: string,
        service: string,
        subservice: string,
        callback: (error: BaseError | null, deviceFound: Device | null) => void
    ): void;

    export function updateDevice(device: Device, callback: (error: BaseError) => void): void;

    export function unregister(
        deviceId: string,
        service: string,
        subservice: string,
        callback: (error?: BaseError) => void
    ): void;

    //********************************************************************************************************** */
    //* CONFIGURATION CRUD
    //********************************************************************************************************** */

    export function getConfiguration(
        resource: string,
        apikey: string,
        callback: (error: BaseError | null, groupFound: Group | null) => void
    ): void;
}

