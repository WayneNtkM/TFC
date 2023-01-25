import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';
import { equalTeams, matches, newMatch, newMatchBody, teamsById, unexistingTeam } from './mocks/matches';
import { token } from './mocks/Login';

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
  it('Should be able to post a new match', async () => {
    sinon.stub(Matches, 'findAll').resolves(teamsById as any);
    sinon.stub(Matches, 'create').resolves(newMatchBody as any);

    const response = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', token)
      .send(newMatch);

    expect(response.body).to.be.deep.eq(newMatchBody);
    expect(response.status).to.be.eq(201);
  });
  it('Should not be able to post a new match with an invalid token', async () => {
    const response = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', 'invalid_token')
      .send(newMatch);

    expect(response.body).to.be.deep.eq({ message: "Token must be a valid token" });
    expect(response.status).to.be.eq(401);
  });
  it('Should not be able to post a new match with two equal teams', async () => {
    const response = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', token)
      .send(equalTeams);

    expect(response.body).to.be.deep.eq({ message: "It is not possible to create a match with two equal teams" });
    expect(response.status).to.be.eq(422);
  });
  it('Should not be able to post a new match with unexisting team', async () => {
    const response = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', token)
      .send(unexistingTeam);

    expect(response.body).to.be.deep.eq({ message: "There is no team with such id!" });
    expect(response.status).to.be.eq(404);
  });
  it('Should be able to set progress match to finished', async () => {
    const response = await chai
      .request(app)
      .patch('/matches/49/finish');

    expect(response.body).to.be.deep.eq({ message: "Finished" });
    expect(response.status).to.be.eq(200);
  });
  it('Should be able to patch match goals', async () => {
    const response = await chai
      .request(app)
      .patch('/matches/49')
      .send({
        "homeTeamGoals": 3,
        "awayTeamGoals": 1
      });

    expect(response.body).to.be.deep.eq({ message: "Updated" });
    expect(response.status).to.be.eq(200);
  });
});