import RNFS from 'react-native-fs';
import { useEffect, useState } from 'react';

export default function useFileSystem(basePath = RNFS.ExternalStorageDirectoryPath) {
  const [files, setFiles] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const readDirectory = async (path: string): Promise<any[]> => {
      try {
        const result = await RNFS.readDir(path);
        const fileList = await Promise.all(
          result.map(async (file) => {
            if (file.isDirectory()) {
              const subFiles = await readDirectory(file.path);
              return { name: file.name, path: file.path, children: subFiles, isDirectory: true };
            } else {
              return { name: file.name, path: file.path, isDirectory: false };
            }
          })
        );
        return fileList;
      } catch (e) {
        console.error('Error reading:', path, e);
        return [];
      }
    };

    readDirectory(basePath)
      .then(setFiles)
      .catch((e) => setError(e.message));
  }, [basePath]);

  return { files, error };
}
