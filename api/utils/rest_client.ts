import { BASE_APP_URL } from 'config/url_config';
import { endpoints } from "services/api_endpoints";
import supertest, { Response } from "supertest";

export const request = supertest(BASE_APP_URL)
  

/**
 * Makes a GET request to the specified endpoint with optional payload and headers.
 * 
 * @param endpoint - The API endpoint to request.
 * @param payload - Optional payload data to send with the request.
 * @param headers - Optional headers to include in the request.
 * @returns A Promise that resolves with the Response object returned by the API.
 */
export const getRequest = async (endpoint: endpoints | string, payload?: string | object, headers?: object): Promise<Response> => {
    return (payload && headers) ? await request.get(endpoint).set(headers).send(payload)
        : payload ? await request.get(endpoint)
            .send(payload) : await request.get(endpoint)
}
    
/**
 * Sends a POST request to the specified endpoint with an optional payload and headers.
 *
 * @param endpoint - The endpoint to send the POST request to.
 * @param payload - An optional payload to send with the request. Can be a string or an object.
 * @param headers - An optional set of headers to send with the request.
 * @returns A Promise that resolves to a Response object with the body and status of the response.
 */
export const postRequest = async (endpoint: endpoints, payload: string | object, headers?: object): Promise<Response> => {
    return headers ?  await request.post(endpoint).set(headers).send(payload) : await request.post(endpoint).send(payload)
}
  
/**
 * Sends a POST request to the specified endpoint with an optional payload and headers.
 *
 * @param endpoint - The endpoint to send the POST request to.
 * @param payload - An optional payload to send with the request. Can be a string or an object.
 * @param headers - An optional set of headers to send with the request.
 * @returns A Promise that resolves to a Response object with the body and status of the response.
 */
export const makePOSTCall = async (endpoint: endpoints | string, payload: string | object, headers?: object): Promise<Response> => {
    return headers ? await request.post(endpoint).set(headers) : await request.post(endpoint).send(payload)
}
  
/**
 * Sends a DELETE request to the specified endpoint with an optional payload.
 *
 * @param endpoint - The endpoint to send the DELETE request to.
 * @param payload - An optional payload to send with the request as an object.
 * @returns A Promise that resolves to a Response object with the body and status of the response.
 */
export const deleteRequest = async (endpoint: endpoints | string, payload?: object): Promise<Response> => {
    return payload ? await request.delete(endpoint).send(payload) : await request.delete(endpoint)
}

/**
 * Sends a PUT request to the specified endpoint with an optional payload.
 *
 * @param endpoint - The endpoint to send the PUT request to.
 * @param payload - An optional payload to send with the request as an object.
 * @returns A Promise that resolves to a Response object with the body and status of the response.
 */
export const putRequest = async (endpoint: endpoints | string, payload?: object): Promise<Response> => {
    return payload ? await request.put(endpoint).send(payload) : request.delete(endpoint)
}

/**
 * Sends an OPTIONS request to the specified endpoint with an optional payload.
 *
 * @param endpoint - The endpoint to send the OPTIONS request to.
 * @param payload - An optional payload to send with the request as an object.
 * @returns A Promise that resolves to a Response object with the body and status of the response.
 */
export const optionRequest = async (endpoint: endpoints | string, payload?: object): Promise<Response> => {
    return payload ? await request.options(endpoint).send(payload) : request.delete(endpoint)
}