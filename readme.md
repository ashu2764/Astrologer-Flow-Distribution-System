## Astrologer Flow Distribution System
# Project Overview
The Astrologer Flow Distribution System is designed to manage and distribute user requests to a pool of astrologers in a fair and balanced manner. The system ensures that each astrologer gets an equal proportion of chances to connect with users while providing the flexibility to adjust flow for top astrologers.

## Key Features
Fair Distribution Algorithm: Evenly distributes users among astrologers.
Dynamic Flow Management: Allows toggling flow preferences for top astrologers.
Scalability: Handles daily flows of 2000-3000 users and a pool of 500 astrologers efficiently.
API Endpoints: Robust RESTful APIs for managing astrologers and user allocations.
Testing and Documentation: Comprehensive test cases and clear documentation for easy usage and maintenance.

## Tech Stack
JavaScript
Node.js
Express.js
MongoDB
Mongoose
Postman
VSCode
Installation and Setup
Prerequisites
Node.js and npm installed on your machine
MongoDB installed and running

## Steps
# Clone the repository:
 git clone https://github.com/ashu2764/Astrologer-Flow-Distribution-System.git
--> cd astrologer-flow-distribution 


# Install dependencies:
--> npm install


# Start the server:
--> npm run dev

## API Endpoints
#1. Create a New Astrologer
Endpoint: POST /api/astrologers
Description: Adds a new astrologer to the system.
Request Body:
$ 
{
  "name": "Astrologer Name",
  "isTopAstrologer": false
} 
$ 
Response: Returns the created astrologer object.

#2. Toggle Top Astrologer Status
Endpoint: POST /api/astrologers/toggle-top
Description: Toggles the top astrologer status for a given astrologer.
Request Body:
$
{
  "astrologerId": "ASTROLOGER_ID_HERE"
}
$
Response: Returns a message indicating the new status.


#3. Allocate Users to Astrologers
Endpoint: POST /api/users/allocate
Description: Allocates users to astrologers based on the distribution algorithm.
Request Body
$
{
  "users": [
    { "name": "User 1" },
    { "name": "User 2" },
    { "name": "User 3" },
    { "name": "User 4" }
  ]
}
$
Response: Returns a message indicating successful allocation.

4. Get All Astrologers
-Endpoint: GET /api/astrologers
-Description: Retrieves all astrologers in the system.
-Response: Returns a list of all astrologers.


## Testing
To run tests, execute:
--> npm test








