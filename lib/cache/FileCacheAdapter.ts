import globby from 'globby';
import { ensureDir, pathExists, readFile, readJSON, unlink, writeJSON } from 'fs-extra';

import { CacheAdapter } from './CacheAdapter';
import { Utils } from '../utils';

export class FileCacheAdapter implements CacheAdapter {

  constructor(private readonly options: { cacheDir: string },
              private readonly baseDir: string,
              private readonly pretty = false) { }

  async get(name: string): Promise<any> {
    const path = await this.path(name);

    if (!await pathExists(path)) {
      return null;
    }

    const payload = await readJSON(path);
    const hash = await this.getHash(payload.origin);

    if (!hash || payload.hash !== hash) {
      return null;
    }

    return payload.data;
  }

  async set(name: string, data: any, origin: string): Promise<void> {
    const path = await this.path(name);
    const opts = this.pretty ? { spaces: 2 } : {};
    const hash = await this.getHash(origin);
    await writeJSON(path, { data, origin, hash }, opts);
  }

  async clear(): Promise<void> {
    const path = await this.path('*');
    const files = await globby(path);

    for (const file of files) {
      await unlink(file);
    }
  }

  private async path(name: string): Promise<string> {
    await ensureDir(this.options.cacheDir);
    return `${this.options.cacheDir}/${name}.json`;
  }

  private async getHash(origin: string): Promise<string | null> {
    origin = Utils.absolutePath(origin, this.baseDir);

    if (!await pathExists(origin)) {
      return null;
    }

    const contents = await readFile(origin);

    return Utils.hash(contents.toString());
  }

}
