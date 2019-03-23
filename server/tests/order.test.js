import app from '/Book-A-Meal/server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const { expect } = chai;

describe('POST meal orders', ()=> {
    it('should post meal orders', (done)=> {
        const order = {
          mealTitle : 'rice and beans'
        }
        chai
          .request(app)
          .post('/api/v1/orders')
          .send(order)
          .end((err, res)=> {
              expect(res).to.have.status(201);
              expect(res.body.status).to.equal(201);
              expect(res.body.msg).to.equal('Order placed successfully')
              done(err);
          })
    })
    it('should return error if meal is not found in menu', (done)=> {
        const order = {
          mealTitle : 'rice and stew'
        }
        chai
          .request(app)
          .post('/api/v1/orders')
          .send(order)
          .end((err, res)=> {
              expect(res).to.have.status(500);
              done(err);
          })
    })
    it('should return error if mealTitle is not specified', (done)=> {
        const order = {
            mealTitle : ''
        }
        chai
          .request(app)
          .post('/api/v1/orders')
          .send(order)
          .end((err, res)=> {
             expect(res).to.have.status(400)
             expect(res.body.status).to.equal(400);
             expect(res.body.error).to.equal('A mealTitle must be specified');
             done(err)
          })
    })
    it('should return error if mealTitle characters is not sufficient', (done)=> {
        const order = {
            mealTitle : 'rice'
        }
        chai
          .request(app)
          .post('/api/v1/orders')
          .send(order)
          .end((err, res)=> {
             expect(res).to.have.status(400)
             expect(res.body.status).to.equal(400);
             expect(res.body.error).to.equal('The mealTitle should be from 10 characters above');
             done(err)
          })
    })
})

//
describe('PUT meal order', ()=> {
    it('should update/change meal order', (done)=> {
        const order = {
            mealTitle : "rice and beans"
        }
        chai
          .request(app)
          .put('/api/v1/orders/1')
          .send(order)
          .end((err, res)=> {
              expect(res).to.have.status(200);
              expect(res.body.status).to.equal(200);
              expect(res.body.msg).to.equal('Meal Successfully modified')
              done(err)
          })
    })
    it('should return error if mealTitle is not specified', (done)=> {
        const order = {
            mealTitle : ''
        }
        chai
          .request(app)
          .put('/api/v1/orders/1')
          .send(order)
          .end((err, res)=> {
             expect(res).to.have.status(400)
             expect(res.body.status).to.equal(400);
             expect(res.body.error).to.equal('A mealTitle must be specified');
             done(err)
          })
    })
    it('should return error if mealTitle characters is not sufficient', (done)=> {
        const order = {
            mealTitle : 'rice'
        }
        chai
          .request(app)
          .put('/api/v1/orders/1')
          .send(order)
          .end((err, res)=> {
             expect(res).to.have.status(400)
             expect(res.body.status).to.equal(400);
             expect(res.body.error).to.equal('The mealTitle should be from 10 characters above');
             done(err)
          })
    })
    it('should return error if orderId is not a number or not found in menu', (done)=> {
        const order = {
            mealTitle : 'rice and beans'
        }
        chai 
          .request(app)
          .put('/api/v1/orders/r')
          .send(order)
          .end((err, res)=> {
             expect(res).to.have.status(404);
             expect(res.body.status).to.equal(404);
             expect(res.body.error).to.equal('Sorry, no meal with such id exists');
             done(err)
          })
    })
})

//
describe('GET meal orders', ()=> {
    it('should get all meal orders', (done)=> {
        chai
          .request(app)
          .get('/api/v1/orders')
          .end((err, res)=> {
              expect(res).to.have.status(200);
              expect(res.body.status).to.equal(200);
              expect(res.body.msg).to.equal('All meal orders');
              done(err)
          })
    })
    
})