import app from '/Book-A-Meal/server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const { expect } = chai;

//POST menu
describe('POST menu', ()=> {
    it('should return error if meal is not found in options', (done)=> {
        const meal = {
            mealTitle: 'rice and beans'
        }
        chai
          .request(app)
          .post('/api/v1/menu')
          .send(meal)
          .end((err, res)=> {
              expect(res).to.have.status(404);
              expect(res.body.status).to.equal(404);
              expect(res.body.error).to.equal('Meal not found in options');
              done(err)
          })
    })
    it('should return error if meal title is not specified', (done)=> {
        const meal = {
            mealTitle: ''
        }
        chai
          .request(app)
          .post('/api/v1/menu')
          .send(meal)
          .end((err, res)=> {
              expect(res).to.have.status(400);
              expect(res.body.status).to.equal(400);
              expect(res.body.error).to.equal('A mealTitle must be specified');
              done(err)
          })
    })
    it('should return error if meal title is not up to 10 characters', (done)=> {
        const meal = {
            mealTitle: 'rice'
        }
        chai
          .request(app)
          .post('/api/v1/menu')
          .send(meal)
          .end((err, res)=> {
              expect(res).to.have.status(400);
              expect(res.body.status).to.equal(400);
              expect(res.body.error).to.equal('The mealTitle should be from 10 characters above');
              done(err)
          })
    })
})

//
describe('GET Menu', ()=> {
    it('should return error if menu for the day has not been set', (done)=> {
       
        chai
          .request(app)
          .get('/api/v1/menu')
          .end((err, res)=> {
              expect(res).to.have.status(200);
              expect(res.body.status).to.equal(200);
              expect(res.body.msg).to.equal("Today's Menu");
              done(err)
          })
    })
})