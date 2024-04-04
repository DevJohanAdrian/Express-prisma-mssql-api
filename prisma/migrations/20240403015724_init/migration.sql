BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [quantity] INT NOT NULL CONSTRAINT [Product_quantity_df] DEFAULT 0,
    [price] INT NOT NULL CONSTRAINT [Product_price_df] DEFAULT 999,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Product_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [categoryId] INT NOT NULL,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Product_name_key] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Category_name_key] UNIQUE NONCLUSTERED ([name])
);

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
