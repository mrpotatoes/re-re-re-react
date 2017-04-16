// On activate we'll go ahead and take the package's settings and merge in the
// user's selected preferance overrides and use that instead of constantly using
// the package's settings. This way if the user changes a setting in a module
// that we expect to have brought in then we'll make sure it uses theirs and not
// ours. That would be overly dickish and quite honestly simply annoying.
