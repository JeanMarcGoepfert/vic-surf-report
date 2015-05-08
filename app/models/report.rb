class Report < ActiveRecord::Base
  has_many :images
  def is_current?
    if self.created_at.present?
      if self.created_at.to_date == Date.today && self.created_at > 2.hours.ago
        return true
      end
    end
    return false
  end
end
