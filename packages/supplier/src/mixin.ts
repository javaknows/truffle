export class AllowsLoadingSpecificVersion {
  allowsLoadingSpecificVersion(): true {
    return true;
  }
}

export class ForbidsLoadingSpecificVersion {
  allowsLoadingSpecificVersion(): false {
    return false;
  }
}

export class AllowsListingVersions {
  allowsListingVersions(): true {
    return true;
  }
}

export class ForbidsListingVersions {
  allowsListingVersions(): false {
    return false;
  }
}