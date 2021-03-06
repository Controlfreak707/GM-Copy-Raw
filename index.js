export default {
  goosemodHandlers: {
    onImport: () => {
      goosemodScope.patcher.contextMenu.add("message", {
        label: "Copy Raw",

        action: (_originalArgs, extraInfo) => {
          try {
            if (extraInfo.message.content == "") {
              return goosemodScope.showToast("Unable to copy", {
                type: "error",
              });
            }

            DiscordNative.clipboard.copy(extraInfo.message.content);
            goosemodScope.showToast("Copied!", {
              type: "success",
              icon: false,
            });
          } catch (error) {
            goosemodScope.showToast("An error has occured!", { type: "error" });
            goosemodScope.logger.debug("Copy Raw - ERROR", error);
          }
        },
      });
    },

    onRemove: () => {
      goosemodScope.patcher.contextMenu.remove("Copy Raw");
    },
  },
};
