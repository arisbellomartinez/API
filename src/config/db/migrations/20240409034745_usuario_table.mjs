
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    return knex.schema.createTable("usuarios", table =>{
        table.increment("id").primay()
        table.string("title").notNullable()
        table.string("description").notNullable()
        table.string("status").notNullable()
        }).createTable("auth", table =>{
        table.increment("id")
        table.string("usuario").notNullable()
        table.string("password").notNullable()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  
};
