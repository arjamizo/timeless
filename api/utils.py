import unicodedata
import uuid


def upload_directory_path(instance, filename):
    safe_name = unicodedata.normalize('NFKD', filename).replace('ł', 'l').replace('Ł', 'L').encode('ASCII', 'ignore')
    return 'uploads/{}/{}'.format(uuid.uuid4(), safe_name)
