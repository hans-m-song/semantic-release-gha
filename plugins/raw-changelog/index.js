module.exports.generateNotes = (_, { nextRelease, logger }) => {
  if (!nextRelease) {
    logger.warn("No release notes available, skipping");
    return;
  }
  console.log(nextRelease.notes);
};
