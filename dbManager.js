const Database = require('better-sqlite3');
const path = require('path');

// Define the database file path
const DB_FILE = path.join(__dirname, 'database.sqlite');

class DBManager {
  constructor() {
    this.db = null;
  }

  /**
   * Opens the database connection if not already open.
   */
  _ensureDbConnection() {
    if (!this.db) {
      this.db = new Database(DB_FILE);
    }
  }

  /**
   * Creates the specified tables.
   * All created tables have id column by default.
   * @param {...string} tables - Names of the tables to create.
   */
  createTables(...tables) {
    this._ensureDbConnection();

    for (const table of tables) {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${table} (
          id INTEGER PRIMARY KEY AUTOINCREMENT
        );
      `;
      this.db.exec(createTableQuery);
      console.log(`Table "${table}" initialized.`);
    }
  }

  /**
   * Adds columns to an existing table.
   * @param {string} tableName - The name of the table to modify.
   * @param {Array<{name: string, type: string}>} columns - List of columns to add.
   */
  addColumn(tableName, columns) {
    this._ensureDbConnection();

    for (const column of columns) {
      try {
        const addColumnQuery = `
          ALTER TABLE ${tableName}
          ADD COLUMN ${column.name} ${column.type};
        `;
        this.db.exec(addColumnQuery);
        console.log(`Column "${column.name}" added to table "${tableName}".`);
      } catch (error) {
        console.error(`Error adding column "${column.name}" to table "${tableName}":`, error.message);
      }
    }
  }

  /**
   * Drops the specified tables from the database.
   * @param {...string} tables - Names of the tables to drop.
   */
  drop(...tables) {
    this._ensureDbConnection();

    for (const table of tables) {
      try {
        const dropTableQuery = `DROP TABLE IF EXISTS ${table};`;
        this.db.exec(dropTableQuery);
        console.log(`Table "${table}" dropped.`);
      } catch (error) {
        console.error(`Error dropping table "${table}":`, error.message);
      }
    }
  }

    /**
   * Destroys the database by deleting the database file.
   */
  destroy() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }

    const fs = require('fs');
    if (fs.existsSync(DB_FILE)) {
      fs.unlinkSync(DB_FILE);
      console.log('Database destroyed successfully.');
    } else {
      console.log('Database file does not exist.');
    }
  }

    /**
     * Insert new row
     * @param {string} tableName - The name of the table to insert data into.
     * @param {object} data - The data to insert into the table. The keys should match the column names. Key values should be the values to insert.     * @example
     * dbManager.insert("Users", {name: "John", email: "john@example.com"});
     * 
     */
    insert(tableName, data) {
        this._ensureDbConnection();
        let keys = Object.keys(data);
        let values = Object.values(data);
        let insertQuery = `INSERT INTO ${tableName} (${keys.join(",")}) VALUES (${keys.map(() => "?").join(",")});`;
        this.db.prepare(insertQuery).run(values);
    }

    /**
     * Execute query
     * @param {string} query - The query to execute.
     * @param {Array} params - The parameters to bind to the query. Leave out if no parameters. 
     * @returns {Array} - The result of the query.
     * @example 
     * dbManager.query("SELECT * FROM Users");
     * dbManager.query("SELECT * FROM Users WHERE name = ?", ["John"]);
     * 
     */
    query(query, params) {
        this._ensureDbConnection();
        if(params === undefined) {
            return this.db.prepare(query).all();
        }
        else {
            return this.db.prepare(query).all(params);
        }
        
    }
}

module.exports = new DBManager();
