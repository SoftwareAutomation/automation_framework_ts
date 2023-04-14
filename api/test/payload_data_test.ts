import { assert, expect } from 'chai';
import { createFakeUserData } from "resources/payload_data";
import { endpoints } from "services/api_endpoints";
import { logResponseToMochaReport, stringFormatter } from 'utils/format_log_messages';

import supertest from 'supertest';
import { getRequest, deleteRequest, postRequest } from '../utils/rest_client';

// import { makeDELETECall, makeGETCall, makePOSTCall } from 'utils/apicalls';
// import { logResponseToMochaReport, stringFormatter } from 'utils/formatter';

describe('The Fake Data provides the initial and final names along with the job position', () => {

    it('should confirm that the users data is not empty', async function () {
        var fakeUserData = createFakeUserData
        assert.isNotNull(fakeUserData.name)
        assert.isNotNull(fakeUserData.job)

    });
});

describe('getRequest', () => {
  it('should create an HTTP GET request to the specified endpoint', async () => {
    const endpoint = '/api/data';
    const response = await getRequest(endpoint, createFakeUserData);
    
    assert.equal(response.status,200);
    expect(response.ok).to.be.true;
    expect(response.get('content-type')).to.include('application/json');
  });
    
  it('should confirm GET user/{id} call', async function () {
    const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
    const response = await getRequest(userByID)
    logResponseToMochaReport(this, response);
    assert.equal(response.statusCode, 200)
    assert.equal(response.body.data.id, 2)
});

it('should confirm DELETE user/{id} call', async function () {
    const userByID = stringFormatter(endpoints.USER_BY_ID_SERVICE, 2)
    const response = await deleteRequest(userByID)
    logResponseToMochaReport(this, response);
    assert.equal(response.statusCode, 204)
});

//   it('should send a JSON payload in the request body', async () => {
//       const endpoint = '/api/data';
//       var fakeUserData = createFakeUserData
//     const response = await getRequest(endpoint, fakeUserData);
    
//     expect(response.status).to.equal(200);
//     expect(response.ok).to.be.true;
//     expect(response.body).to.deep.equal(fakeUserData);
//   });

//   it('should include headers in the request', async () => {
//     const endpoint = '/api/data';
//     const headers = { Authorization: 'Bearer <token>' };
//     const response = await getRequest(endpoint, null, headers);
    
//     expect(response.status).to.equal(200);
//     expect(response.ok).to.be.true;
//     expect(response.headers.get('authorization')).to.equal(headers.Authorization);
//   });

//   it('should handle errors gracefully', async () => {
//     const endpoint = '/api/invalid';
//       const response = await getRequest(endpoint, createFakeUserData);
    
//     expect(response.status).to.equal(404);
//     expect(response.notFound).to.be.true;
//     expect(response.body.message).to.include('Not Found');
//   });

//   it('should integrate with an Express app', async () => {
//       const endpoint = '/api/data';
//       const response = await getRequest(endpoint, createFakeUserData);
    
//     expect(response.status).to.equal(200);
//     expect(response.ok).to.be.true;
//     expect(response.headers.get('content-type')).to.include('application/json');
//   });
});