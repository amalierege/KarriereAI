import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-node";
import x_all from "./processed/x_all.js";
import y_all from "./processed/y_all.js";
import y_all_enc from "./processed/y_all_enc.js";
import skills from "./processed/skills.js";
import titles from "./processed/titles.js";

const model = tf.sequential({
  layers: [
    tf.layers.inputLayer({ inputShape: [skills.length] }),
    tf.layers.dropout({ rate: 0.1 }),
    tf.layers.dense({ units: 400, activation: "relu" }),
    tf.layers.dropout({ rate: 0.4 }),
    tf.layers.dense({ units: 400, activation: "relu" }),
    tf.layers.dropout({ rate: 0.1 }),
    tf.layers.dense({ units: titles.length, activation: "softmax" }),
  ],
});

model.compile({
  loss: tf.metrics.categoricalCrossentropy,
  optimizer: "adam",
  metrics: ["accuracy", "precision"],
});

// tf.tensor2d(y_all_enc)
const history = await model.fit(tf.tensor2d(x_all), tf.tensor2d(y_all_enc), {
  epochs: 32,
  batchSize: 1,
  validationSplit: 0.2,
});
console.info(`Training complete`);

await model.save("file://./saved_karriereai_model");

console.log(history);

/*
# Logging metrics for TensorBoard
log_dir = "logs/fit/" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
tensorboard_callback = tensorflow.keras.callbacks.TensorBoard (log_dir = log_dir, histogram_freq = 1)

# Training the model
epochs = 32
history = model.fit (
	X_train, y_train,
	epochs = epochs, 
	batch_size = 1, 
	validation_split = 0.2,
	callbacks = [tensorboard_callback]
)
	*/
