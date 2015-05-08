class AddFieldsToReports < ActiveRecord::Migration
  def change
    add_column :reports, :report_time, :string
    add_column :reports, :surf, :string
    add_column :reports, :winds, :string
    add_column :reports, :weather, :string
    add_column :reports, :rating, :string
    add_column :reports, :description, :text
    add_column :reports, :link, :string
  end
end
