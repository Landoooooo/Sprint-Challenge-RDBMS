const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

const server = express();
server.use(express.json());

server.post('/api/projects', async (req,res) => {
    try{
        const project = await db('project').insert(req.body)
        if(project){
            return res.status(200).json({alert: "project created"})
        } else {
            return res.status(404).json({alert: "project couldn't be created"})
        }
    } catch (e) {
        res.status(500).json({e})
    }
})

server.post(`/api/projects/:id`, async (req,res) => {
    try{
        const actions = await db('action').insert(req.body)
        if (actions) {
            return res.status(200).json({alert: "action created"})
        } else {
            return res.status(404).json({alert: "action could not be created"})
        }
    } catch (e) {
        res.status(500).json({e})
    }
})

server.get('/api/projects', async(req,res) => {
    try{
        const project = await db('project')
        res.status(200).json(project)
    } catch (e) {
        res.status(500).json(e)
    }
})

server.get('/api/actions', async(req,res) => {
    try{
        const action = await db('action')
        res.status(200).json(action)
    } catch (e) {
        res.status(500).json(e)
    }
})

server.get('/api/projects/:id', async(req,res) => {
    try{
        const project = await db('project').where({id: req.params.id})
        const actions = await db('action').where({project_id: req.params.id});
        if (project) {
            res.status(200).json({ project, actions })
        } else {
            res.status(404).json({alert: "there's an issue bro"})
        }
    } catch (e) {
        res.status(500).json(e)
    }
})


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
