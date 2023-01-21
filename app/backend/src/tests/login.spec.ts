import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';
import { token, user } from './mocks/Login';
import * as jwt from 'jsonwebtoken';
import { IJWTLogin } from '../interfaces/Login';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test Login integration', () => {
  afterEach(sinon.restore);

  it('Should be able to login', async () => {
    sinon.stub(User, 'findOne').resolves(user as any);
    
    const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'ofamoso16ton@famoso.com', password: '16toneladas' });

    const validToken = jwt
      .verify(
        response.body.token,
        process.env.JWT_SECRET as jwt.Secret
      ) as IJWTLogin;
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
    expect(validToken.email).to.be.equal('ofamoso16ton@famoso.com');
  });
  it('Should return an error - user entered wrong email', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'ofamoso26ton@famoso.com', password: '16toneladas' });
      
      
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
  });
  it('Should return an error - user entered wrong password', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'ofamoso16ton@famoso.com', password: '26toneladas' });
      
      
    expect(response.status).to.be.equal(401);
    expect(response.body).to.be.deep.equal({ message: 'Incorrect email or password' });
  });
  it('Should return an error - user did not provide email', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({ password: '26toneladas' });
      
      
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  it('Should return an error - user did not provide password', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({ email: 'ofamoso16ton@famoso.com' });
      
      
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  it('Should return user role', async () => {
    sinon.stub(User, 'findOne').resolves({ role: user.role } as any);

    const response = await chai
      .request(app)
      .get('/login/validate')
      .set('Authorization', token);
      
    expect(response.status).to.be.equal(200);
    expect(response.body).not.to.be.deep.equal({ role: 'admin' });
    expect(response.body).to.be.deep.equal({ role: 'user' });
  });
});
