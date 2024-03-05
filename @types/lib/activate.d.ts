/**
 * Activates the IoT Agent to start listening for NGSI Calls (acting as a Context Provider).
 * It also creates the device registry for the IoT Agent (based on the deviceRegistry.type configuration option).
 *
 * @param newConfig Configuration of the Context Server
 */
declare function activate(newConfig: IoTConfig, callback: (error: BaseError | null) => void): void;
