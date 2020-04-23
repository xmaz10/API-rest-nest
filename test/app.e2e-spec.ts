import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/tools (POST)', () => {
    return request(app.getHttpServer())
      .post('/tools')
      .send({
        title: 'title',
        link: 'https://www.google.com',
        description: 'description',
        tags: ['tag1', 'tag2'],
      })
      .expect(201);
  });
  it('/tools (GET)', () => {
    return request(app.getHttpServer())
      .get('/tools')
      .expect(200, {
        title: 'title',
        link: 'https://www.google.com',
        description: 'description',
        tags: ['tag1', 'tag2'],
      });
  });
  it('/tools/id (GET)', () => {
    return request(app.getHttpServer())
      .get('/tools/1')
      .expect(200, {
        title: 'title',
        link: 'https://www.google.com',
        description: 'description',
        tags: ['tag1', 'tag2'],
      });
  });
  it('/tools/id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/tools/1')
      .expect(200, {
        title: 'title2',
        link: 'https://www.youtube.com',
        description: 'description2',
        tags: ['tag3', 'tag4'],
      });
  });
  it('/tools/id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/tools/1')
      .expect(204);
  });
});
