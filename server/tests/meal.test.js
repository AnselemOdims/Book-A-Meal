import app from '/Book-A-Meal/server';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const { expect } = chai;

// Test for GET meal options
describe('GET meal options', ()=> {
    it('should retrieve list of all meal options', (done)=> {
        chai
            .request(app)
            .get('/api/v1/meals')
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.status).to.equal(200);
              done(err);
            })
    })
    it('should return error for wrong url', (done)=> {
        chai
            .request(app)
            .get('/api/v1/m')
            .end((err, res) => {
              expect(res).to.have.status(404);
              done(err);
            })
    })
    
})

// Test for POST or Create meal options
describe('POST meal options', ()=> {
  it('should create meal option', (done)=> {
    const meals = {
      mealTitle: 'fufu and egusi soup',
      images: 'rice.jpg',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(201);
        expect(res.body.status).to.equal(201);
        expect(res.body.msg).to.equal('Meal successfully created');
        
        done(err);
      })
  })

  it('should return error if wrong url is put', (done)=> {
    const meals = {
      mealTitle: 'eba and egusi soup',
      images: 'rice.jpg',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/m')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(404);
        done(err);
      })
  })

  it('should return error if no meal title is specified', (done)=> {
    const meals = {
      mealTitle: '',
      images: 'rice.jpg',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('A mealTitle must be specified')
        done(err);
      })
  })
  it('should return error if the meal title is less than 10 characters', (done)=> {
    const meals = {
      mealTitle: 'fufu',
      images: 'rice.jpg',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('The mealTitle should be from 10 characters above')
        done(err);
      })
  })
  it('should return error if no image is included', (done)=> {
    const meals = {
      mealTitle: 'fufu',
      images: '',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('Meal image must be included')
        done(err);
      })
  })
  it('should return error if the image does not include the supported media format', (done)=> {
    const meals = {
      mealTitle: 'fufu',
      images: 'rice.hjeg',
      price: '550'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(415);
        expect(res.body.status).to.equal(415);
        expect(res.body.error).to.equal('Sorry, the format you specified is incorrect. Only .jpeg, .jpg, .png formats are accepted')
        done(err);
      })
  })
  it('should return error if no price is included', (done)=> {
    const meals = {
      mealTitle: 'fufu and egusi soup',
      images: 'fufu.jpg',
      price: ''
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('Meal price must be specified')
        done(err);
      })
  })
  it('should return error if the price is not a number', (done)=> {
    const meals = {
      mealTitle: 'fufu and egusi soup',
      images: 'rice.jpeg',
      price: 'rice'
    }
    chai
      .request(app)
      .post('/api/v1/meals')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('Price must be in numerical form')
        done(err);
      })
  })
})

//Test for PUT or Update of meal options
describe('PUT meal options', ()=> {
  it('should update a meal option if inputs are correct', (done)=> {
    const meals = {
      mealTitle: 'rice and stew',
      price: 750,
      images: 'rice.png'
    }
    chai 
      .request(app)
      .put('/api/v1/meals/1')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.msg).to.equal('Meal updated successfully')
        done(err);
      })
  })
  it('should return error for wrong url', (done)=> {
    const meals = {
      mealTitle: 'rice and stew',
      price: 750,
      images: 'rice.png'
    }
    chai
      .request(app)
      .put('/api/v1/mea/1')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(404);
        done(err);
      })
  })
  it('should return error if id is not a number', (done)=> {
    const meals = {
      mealTitle: 'rice and stew',
      price: 700,
      images: 'rice.png'
    }
    chai
      .request(app)
      .put('/api/v1/meals/10afs')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.has.status(404);
        expect(res.body.status).to.equal(404);
        
        done(err);
      })
  })
  it('should return error if id does not exist', (done)=> {
    const meals = {
      mealTitle: 'rice and beans',
      price: 750,
      images: 'beans.png'
    }
    chai
      .request(app)
      .put('/api/v1/meals/5')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.has.status(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.error).to.equal('Sorry, no meal with such id exists')
        done(err);
      })
  })
it('should return error if no image is specified', (done)=> {
    const meals = {
      mealTitle: 'rice and beans',
      price: 750,
      images: ''
    }
    chai
      .request(app)
      .put('/api/v1/meals/1')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(400);
        expect(res.body.status).to.equal(400);
        expect(res.body.error).to.equal('Meal image must be included')
        done(err)
      })
})
it('should return error if image does not follow the supported format', (done)=> {
    const meals = {
      mealTitle: 'rice and beans',
      price: 750,
      images: 'rice.jfg'
    }
    chai
      .request(app)
      .put('/api/v1/meals/1')
      .send(meals)
      .end((err, res)=> {
        expect(res).to.have.status(415);
        expect(res.body.status).to.equal(415);
        expect(res.body.error).to.equal(
          'Sorry, the format you specified is incorrect. Only .jpeg, .jpg, .png formats are accepted'
          )
        done(err)
      })
})
it('should return error if meal title is not specified', (done)=> {
  const meals = {
    mealTitle: '',
    price: 750,
    images: 'rice.jpeg'
  }
  chai
    .request(app)
    .put('/api/v1/meals/1')
    .send(meals)
    .end((err, res)=> {
      expect(res).to.have.status(400);
      expect(res.body.status).to.equal(400);
      expect(res.body.error).to.equal(
        'A mealTitle must be specified'
        )
      done(err)
    })
})
it('should return error if meal title is not up to 10 characters', (done)=> {
  const meals = {
    mealTitle: 'rice',
    price: 750,
    images: 'rice.jpeg'
  }
  chai
    .request(app)
    .put('/api/v1/meals/1')
    .send(meals)
    .end((err, res)=> {
      expect(res).to.have.status(400);
      expect(res.body.status).to.equal(400);
      expect(res.body.error).to.equal(
        'The mealTitle should be from 10 characters above'
        )
      done(err)
    })
})
it('should return error if meal price is not specified', (done)=> {
  const meals = {
    mealTitle: 'rice and stew',
    price: '',
    images: 'rice.jpeg'
  }
  chai
    .request(app)
    .put('/api/v1/meals/1')
    .send(meals)
    .end((err, res)=> {
      expect(res).to.have.status(400);
      expect(res.body.status).to.equal(400);
      expect(res.body.error).to.equal(
        'Meal price must be specified'
        )
      done(err)
    })
})
it('should return error if meal price is not a number', (done)=> {
  const meals = {
    mealTitle: 'rice and stew',
    price: 'hfun',
    images: 'rice.jpeg'
  }
  chai
    .request(app)
    .put('/api/v1/meals/1')
    .send(meals)
    .end((err, res)=> {
      expect(res).to.have.status(400);
      expect(res.body.status).to.equal(400);
      expect(res.body.error).to.equal(
        'Price must be in numerical form'
        )
      done(err)
    })
})
})

//DELETE meal options
describe('DELETE meal options', ()=> {
  it('should delete meal successfully', (done)=> {
    chai 
      .request(app)
      .delete('/api/v1/meals/1')
      .end((err, res)=> {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal(200);
        expect(res.body.msg).to.equal('Meal successfully deleted');
        done(err)
      })
  })
  it('should return error for wrong url', (done)=> {
    chai
      .request(app)
      .delete('/api/v1/meal/1')
      .end((err, res)=> {
        expect(res).to.have.status(404);
        done(err)
      })
  })
  it('should return error if id is not a number', (done)=> {
    chai
      .request(app)
      .delete('/api/v1/meals/1ejr')
      .end((err, res)=> {
        expect(res).to.have.status(404);
        expect(res.body.status).to.equal(404);
        done(err)
      })
  })
  it('should return error if id does not exist', (done)=> {
    chai
      .request(app)
      .delete('/api/v1/meals/10')
      .end((err, res)=> {
        expect(res).to.have.status(404);
        expect(res.body.status).to.equal(404);
        expect(res.body.error).to.equal('Sorry, no meal with such id exists')
        done(err)
      })
  })
})