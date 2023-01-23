import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import { teamById, teams } from './mocks/Teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams integration test', () => {
  afterEach(sinon.restore);

  it('Should return all teams', async () => {
    sinon.stub(Teams, 'findAll').resolves(teams as any);

    const response = await chai
      .request(app)
      .get('/teams');

    expect(response.body).to.be.deep.eq(teams);
    expect(response.status).to.be.eq(200);
  });
  it('Should return a specific team based on id', async () => {
    sinon.stub(Teams, 'findByPk').resolves(teamById as any);

    const response = await chai
      .request(app)
      .get('/teams/5');

    expect(response.body).to.be.deep.eq(teamById);
    expect(response.status).to.be.eq(200);
  });
});