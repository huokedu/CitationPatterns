# Backend

## Database setup

:exclamation:**This command may take up to 3 hours depending on your hardware and database setup**:exclamation:  
:exclamation:**Make sure to fetch the data directory from git-lfs**:exclamation:

```bash
rake db:seed
```

## Dev install
```bash
bundle
```

## Dev server start
```bash
rails s -p 16198
```

## Migrate
```bash
rails neo4j:migrate
```
