import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import { away, home, leaderboard } from './mocks/Leaderboard';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard integration test', () => {
  afterEach(sinon.restore);

  it('Should return the leaderboard based on home teams', async () => {
    sinon.stub(Matches, 'findAll').resolves(home as any);

    const response = await chai
      .request(app)
      .get('/leaderboard/home');

      expect(response.body).to.be.deep.eq(home);
      expect(response.status).to.be.eq(200);
  });
  it('Should return the leaderboard based on away teams', async () => {
    sinon.stub(Matches, 'findAll').resolves(away as any);

    const response = await chai
      .request(app)
      .get('/leaderboard/away');

      expect(response.body).to.be.deep.eq(away);
      expect(response.status).to.be.eq(200);
  });
  it('Should return the overall leaderboard', async () => {
    sinon.stub(Matches, 'findAll').resolves(leaderboard as any);

    const response = await chai
      .request(app)
      .get('/leaderboard');

      expect(response.body).to.be.deep.eq(leaderboard);
      expect(response.status).to.be.eq(200);
  });
});
