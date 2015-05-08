class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :location
      t.references :report, index: true

      t.timestamps
    end
  end
end
