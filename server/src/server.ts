import * as grpc from "@grpc/grpc-js";
import {sendUnaryData} from "@grpc/grpc-js/build/src/server-call";

import {BookServiceService, IBookServiceServer} from "./grpcjs/proto/book_grpc_pb";
import { Book, GetBookRequest, GetBookViaAuthor } from "./grpcjs/proto/book_pb";


console.log("Starting GRPC Server....");