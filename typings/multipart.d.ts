// declare module 'egg' {
//   // extend request
//   interface Request {
//     files: FileList
//   }

//   // extend egg config
//   interface EggAppConfig {
//     multipart: EggMultipartConfig
//   }

//   interface EggMultipartConfig {
//     /**
//      * which mode to handle multipart request, default is `stream`, the hard way.
//      * If set mode to `file`, it's the easy way to handle multipart request and save it to local files.
//      * If you don't know the Node.js Stream work, maybe you should use the `file` mode to get started.
//      */
//     mode: 'file' | 'stream',

//     /**
//      * Auto set fields to parts, default is `false`. Only work on `stream` mode.
//      * If set true，all fields will be auto handle and can acces by `parts.fields`
//      */
//     autoFields: boolean,

//     /**
//      * Default charset encoding, don't change it before you real know about it
//      */
//     defaultCharset: 'utf8',

//     /**
//      * Max field name size (in bytes), default is `100`
//      */
//     fieldNameSize: number,

//     /**
//      * Max field value size (in bytes), default is `100kb`
//      */
//     fieldSize: string | number,

//     /**
//      * Max number of non-file fields, default is `10`
//      */
//     fields: number,

//     /**
//      * fileSize - Max file size (in bytes), default is `10mb`
//      */
//     fileSize: string | number,

//     /**
//      * Max number of file fields, default is `10`
//      */
//     files: number,

//     /**
//      * The white ext file names, default is `null`
//      */
//     fileExtensions: string[],

//     /**
//      * Add more ext file names to the `whitelist`, default is `[]`
//      */
//     whitelist: string[] | Function,

//     /**
//      * The directory for temporary files. Only work on `file` mode.
//      */
//     tmpdir: string,

//     /**
//      *  run tmpdir clean job on every day 04:30 am
//      *  cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
//      */
//     cleanSchedule: {
//       cron: '0 30 4 * * *'
//     }
//   }
// }