import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";

const loadVectorDB = async () => {
  const pinecone = new Pinecone();
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

  const loader = new TextLoader("data/support-data.txt");
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    // chunkSize: 300,
    // chunkOverlap: 200,
  });

  const splitDocs = await splitter.splitDocuments(docs);

  await PineconeStore.fromDocuments(splitDocs, new OpenAIEmbeddings(), {
    pineconeIndex,
    maxConcurrency: 5, // Maximum number of batch requests to allow at once. Each batch is 1000 vectors.
  });
};

loadVectorDB();
