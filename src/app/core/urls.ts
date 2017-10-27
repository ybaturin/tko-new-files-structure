export namespace api {
  export namespace generating {
    export function types() { return '/api/generating/types'; }
    export function create() { return 'api/generating/create?expand=profile'; }
    export function update(id: number) { return `api/generating/update/${id}?expand=profile`; }
  }

  export namespace geo {
    export function coordByFias(fiasGuid: string) { return `/api/geo/coords-by-fias-guid?fias_guid=${fiasGuid}`; }
  }
}

export namespace line {
  export function mso() { return '/line/mso?expand=odsMsoCheck'; }
  export namespace mso {
    export function registryExport() {
      return '/line/mso/registry-export';
    }
  }
}
