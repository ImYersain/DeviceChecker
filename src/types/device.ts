export interface DeviceType {
    'id': number | null,
    'os': string | null,
    'vendor': string | null,
    'model': string | null,
    'image': string | null,
    'borrowed'?: {
        'user': {
          'id': number | null,
          'type': string | null,
          'login': string | null,
          'name': string | null
        },
    }
}