import app from "./app";

import createUser from "./endpoints/createUser";
import getOwnProfile from "./endpoints/getOwnProfile";
import getOtherUserProfile from "./endpoints/getOtherUserProfile";
import login from "./endpoints/login";
import createRecipe from "./endpoints/createRecipe";
import getRecipe from "./endpoints/getRecipe";

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/profile", getOwnProfile);
app.get("/user/:id", getOtherUserProfile);

app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipe);

/* "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlZDZhNWJmLWJlOWEtNGNkMS04OTVjLTZiOWM3MjA0YmU0YyIsImlhdCI6MTYyMzMzMzkwOCwiZXhwIjoxNjI1NDA3NTA4fQ.Q_nPgDlcPLXsBw7mJgwHuGCKhn5vFTqDqY8E9j0drMw" 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlZDZhNWJmLWJlOWEtNGNkMS04OTVjLTZiOWM3MjA0YmU0YyIsImlhdCI6MTYyMzMzNDI2NywiZXhwIjoxNjI1NDA3ODY3fQ.JqPqFpQRagAGQra9KKPLq8eTL57yGSEPYCuM8QdvDPE"*/
