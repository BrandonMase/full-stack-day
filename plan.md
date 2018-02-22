
# Plan


* Front-end
  * ~~Routing - browser Router~~
  * Components
    * ~~Login~~
      * ~~Picture~~
      * ~~Button~~
      * ~~Environment Variables - dotenv~~
    * Account
      * User info (redux)
      * axios to fetch user info
  * Redux
    * Store
    * ducks folder
    * reducer
    * Action creators
    * action names
* Back-end
  * Database
    * Table
      * user table
        * id (serial)
        * name
        * auth0_sub
        * picture
      * Queries
        * look up user by auth0_id
        * add a user
        * init
  * Server
    * proxy in package.json
    * API endpoints
      * GET user data
        * ensure user is logged in (middleware)
      * auth callback
      * logout
      * 
* ~~Packages~~ **DONE**
  * ~~dotenv~~
  * ~~redux~~
  * ~~react-redux~~
  * ~~axios~~
  * ~~react-router-dom~~
  * ~~massive~~
  * ~~express~~
  * ~~express-session~~
  * ~~body-parser~~
* Environment Variables
  * Connection string
  * session key
  * auth0 domain
  * auth0 client id
  * auth0 client secret
* Important Notes
  * Put dotenv in .gitignore
  * Restart severs whenever we change environment variables
  * ~~change package.json proxy section for auth callback~~