const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;

    // Enhanced input validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    if (!data || !data.id) {
      return res.status(400).json({ msg: "Invalid movie data" });
    }

    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

      if (!movieAlreadyLiked) {
        const updatedUser = await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );

        if (!updatedUser) {
          return res.status(500).json({ msg: "Failed to update user" });
        }

        return res.json({ msg: "Movie added successfully", user: updatedUser });
      }
      return res
        .status(409)
        .json({ msg: "Movie already added to the liked list." });
    }

    const newUser = await User.create({ email, likedMovies: [data] });
    return res.status(201).json({
      msg: "New user created and movie added successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error adding movie:", error);
    return res.status(500).json({
      msg: "Error adding movie",
      error: error.message,
    });
  }
};

module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;

    // Enhanced input validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.json({
      msg: "success",
      movies: user.likedMovies,
    });
  } catch (err) {
    console.error("Error fetching movies:", err);
    return res.status(500).json({
      msg: "Error fetching movies",
      error: err.message,
    });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) res.status(400).send({ msg: "Movie not found" });
      likedMovies.splice(movieIndex, 1);

      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie Deleted", movies: likedMovies });
    }
  } catch (err) {
    return res.json({ msg: "Error deleting movie" });
  }
};
