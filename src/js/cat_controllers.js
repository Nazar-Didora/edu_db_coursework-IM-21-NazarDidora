'use strict';

const mysqlActions = require("./mysql");

const controllers = {
    getAll: async (req, res) => {
        const data = await mysqlActions.getAll();
        res.status(200).send(data);
    },
    getById: async (req, res) => {
        const id = req.params.id;
        const data = await mysqlActions.getById(id);
        if(!data) {
            return res.status(200).send({
                message:'Not found'
            });
        }
        if(data.error) {
            return res.status(500).send({
                message:'Database error'
            })
        }
        res.status(200).send(data);
    },
    create: async(req, res) => {
        const {
            name, desc, catid, postid
        } = req.body;
        const data = await mysqlActions.create(name, desc, catid, postid);
        if(data && data.error) {
            return res.status(500).send({
                message:'Database error'
            })
        }
        res.status(201).send(data);
    },
    update: async(req, res) => {
        const {
            name, desc
        } = req.body;
        const { id } = req.params;
        const data = await mysqlActions.update(name, desc, id);
        if(data && data.error) {
            return res.status(500).send({
                message:'Database error'
            })
        }
        res.status(200).send(data);
    },
    delete: async(req, res) => {
        const {
            id
        } = req.params;
        const data = await mysqlActions.delete(id);
        if(data && data.error) {
            return res.status(500).send({
                message:'Database error'
            })
        }
        res.status(200).send(data);
    }
};

module.exports = controllers;
