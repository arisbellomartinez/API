
export function up(knex){
  return knex.schema.createTable("usuarios", (table) =>{
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("status").notNullable();
    table.timestamps(true, true);
  }).createTable("auth", (table) =>{
    table.increments("id").primary();
    table.string("usuario").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  })}

export const down = async (knex) => {
  return knex.schema.dropTable("usuarios").dropTable("auth")
};
