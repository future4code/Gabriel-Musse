import { app } from "./controller/app";
import PostRouter from "./routes/PostRouter";
import UserRouter from "./routes/UserRouter";

app.use("/user", UserRouter);
app.use("/post", PostRouter);