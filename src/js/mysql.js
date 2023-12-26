'use strict';

const mysql = require('mysql2/promise');

const info = {
    user:       'root',
    password:   'password1234qwas4',
    database:   'mydb',
    host:       'localhost'
};

const pool = mysql.createPool(info);

const mysqlActions = {
    getAll: async () =>{
        try{
            const [response] = await  pool.execute('SELECT * FROM mydb.Category');
            return response;
        } catch(err){
            console.log(err);
            return {
                error:true
            };
        };
    },
    getById: async(id) =>{
        try{
            const [response] = await  pool.execute('SELECT * FROM mydb.Category Where id = ?', [id]);
                return response[0];
        } catch(err) {
            console.log(err);
            return {
                error:true
            };
        };
    },
    create: async (name, desc, catid, postid) =>{
        try{
            const [response] = await pool.execute(`
                Insert into mydb.Category
                (name, description, Post_id, Category_id)
                values ("${name}", "${desc}", ${postid}, ${catid})`
            );
            return response[0];
        } catch(err) {
            console.log(err);
            return {
                error:true
            };
        };
    },
    update: async (name, description, id) =>{
        try{
            const nameStr = name ? `name='${name}'` : ' ';
            const descStr = description ? `description='${description}'` : ' ';
            const isOpts = (name && description) ? ', ' : ' ';
            const sqlStr = nameStr + isOpts + descStr;
            const [response] = await pool.execute(`
                UPDATE mydb.Category
                SET ${sqlStr}
                WHERE id = ${id};
            `);
            return response;
        } catch(err) {
            console.log(err);
            return {
                error:true
            };
        };
    },
    delete: async (id) =>{
        try{
            const [response] = await pool.execute(`
                DELETE FROM mydb.Category
                WHERE id = ${id};
            `);
            return response;
        } catch(err) {
            console.log(err);
            return {
                error:true
            };
        };
    }
};

module.exports =  mysqlActions;
