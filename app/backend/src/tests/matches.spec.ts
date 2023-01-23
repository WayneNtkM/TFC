import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { matches } from './mocks/matches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test Matches integration', () => {
  afterEach(sinon.restore);

  it('Should return all matches', async () => {
    sinon.stub(Matches, 'findAll').resolves(matches as any);

    const response = await chai
      .request(app)
      .get('/matches');

    expect(response.body).to.be.deep.eq(matches);
    expect(response.status).to.be.eq(200);
  });
  it('Should return all matches in progress', async () => {
    sinon.stub(Matches, 'findAll').resolves([matches[0]] as any);

    const response = await chai
      .request(app)
      .get('/matches')
      .query({ inProgress: 'true' });

    expect(response.body).to.be.deep.eq([matches[0]]);
    expect(response.status).to.be.eq(200);
  });
  it('Should return all closed matches', async () => {
    sinon.stub(Matches, 'findAll').resolves([matches[1]] as any);

    const response = await chai
      .request(app)
      .get('/matches')
      .query({ inProgress: 'false' });

    expect(response.body).to.be.deep.eq([matches[1]]);
    expect(response.status).to.be.eq(200);
  });
});